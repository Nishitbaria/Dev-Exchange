import { upvoteQuestion } from '/C:/Users/Admin/Desktop/nextjs14/lib/actions/question.action';

describe('upvoteQuestion', () => {
  it('should update the question with the user upvote', async () => {
    // Mock the required dependencies and setup necessary data
    const params = {
      questionId: 'question123',
      userId: 'user123',
      hasupVoted: false,
      hasdownVoted: false,
      path: '/questions',
    };

    const connectToDatabaseMock = jest.fn();
    const QuestionMock = {
      findByIdAndUpdate: jest.fn().mockResolvedValue({}),
    };
    const revalidatePathMock = jest.fn();

    // Mock the dependencies and call the function
    jest.mock('/C:/Users/Admin/Desktop/nextjs14/lib/actions/question.action', () => ({
      connectToDatabase: connectToDatabaseMock,
      Question: QuestionMock,
      revalidatePath: revalidatePathMock,
    }));

    await upvoteQuestion(params);

    // Verify the function calls and expected behavior
    expect(connectToDatabaseMock).toHaveBeenCalled();
    expect(QuestionMock.findByIdAndUpdate).toHaveBeenCalledWith(
      params.questionId,
      {
        $addToSet: { upvotes: params.userId },
      },
      { new: true }
    );
    expect(revalidatePathMock).toHaveBeenCalledWith(params.path);
  });

  // Add more test cases for different scenarios if needed
});