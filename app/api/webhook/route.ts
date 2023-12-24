/* eslint-disable camelcase */
import { Webhook } from "svix";
import { headers } from "next/headers";
import { WebhookEvent } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import { createUser, deleteUser, updateUser } from "@/lib/actions/user.action";

export async function POST(req: Request) {
  // TODO : Add you wenhook secret from here
  // You can find this in the Clerk Dashboard -> Webhooks -> choose the webhook
  const WEBHOOK_SECRET = process.env.NEXT_CLERK_WEBHOOK_SECRET;

  if (!WEBHOOK_SECRET) {
    throw new Error(
      "Please add WEBHOOK_SECRET from Clerk Dashboard to .env or .env.local"
    );
  }

  // Get the headers
  const headerPayload = headers();
  const svix_id = headerPayload.get("svix-id");
  const svix_timestamp = headerPayload.get("svix-timestamp");
  const svix_signature = headerPayload.get("svix-signature");

  // If there are no headers, error out
  if (!svix_id || !svix_timestamp || !svix_signature) {
    return new Response("Error occured -- no svix headers", {
      status: 400,
    });
  }

  // Get the body
  const payload = await req.json();
  const body = JSON.stringify(payload);

  // Create a new Svix instance with your secret.
  const wh = new Webhook(WEBHOOK_SECRET);

  let evt: WebhookEvent;

  // Verify the payload with the headers
  try {
    evt = wh.verify(body, {
      "svix-id": svix_id,
      "svix-timestamp": svix_timestamp,
      "svix-signature": svix_signature,
    }) as WebhookEvent;
  } catch (err) {
    console.error("Error verifying webhook:", err);
    return new Response("Error occured", {
      status: 400,
    });
  }

  const eventType = evt.type;

  if (eventType === "user.created") {
    const { id, email_addresses, username, first_name, last_name, image_url } =
      evt.data;
    const mongoUser = await createUser({
      clerkId: id,
      name: `${first_name} ${last_name}`,
      email: email_addresses[0].email_address,
      username: username!,
      picture: image_url,
    });

    return NextResponse.json({ message: "ok", user: mongoUser });
  } else if (eventType === "user.updated") {
    const { id, email_addresses, username, first_name, last_name, image_url } =
      evt.data;
    const mongoUser = await updateUser({
      clerkId: id,
      updateData: {
        name: `${first_name} ${last_name}`,
        email: email_addresses[0].email_address,
        username: username!,
        picture: image_url,
      },
      path: `/profile/${id}`,
    });

    return NextResponse.json({ message: "ok", user: mongoUser });
  }
  if (eventType === "user.deleted") {
    const { id } = evt.data;

    const deletedUser = await deleteUser({
      clerkId: id!,
    });

    return NextResponse.json({ message: "ok", user: deletedUser });
  }

  return new Response("", { status: 200 });
}
