export const answerQueryOptions = [
  {
    id: 'answer queries',
    options: [
      {
        label: 'How to answer a question?',
        value: 'about answering a question',
        trigger: 'answer a question response',
      },
      {
        label: 'Can i delete my wrong answer?',
        value: 'deleting a answer',
        trigger: 'delete answer response',
      },
    ],
  },
]

export const answerQueryResponse = [
  {
    id: 'answer a question response',
    message:
      'To answer a question you need to signin as a user first. after that, you can click any question you want to answer you can see a answer form inside question detail page.',
    trigger: 'any other query',
  },
  {
    id: 'delete answer response',
    message:
      'Yes, you can delete an answer you posted just by clicking delete option below your answer.',
    trigger: 'any other query',
  },
]
