export const otherQueryOptions = [
  {
    id: 'other queries',
    options: [
      {
        label: 'Can I signup without phone number verification?',
        value: 'phone number verification',
        trigger: 'phone verification response',
      },
      {
        label: 'What can I do in this website?',
        value: 'purpose of this website',
        trigger: 'purpose of website response',
      },
    ],
  },
]

export const otherQueryResponse = [
  {
    id: 'phone verification response',
    message: 'NO, you cannot signup without phone verification',
    trigger: 'any other query',
  },
  {
    id: 'purpose of website response',
    message:
      'This website is made for programmers who suffer some hard bug in there application. By this website you can share your code to other programmers and get help.',
    trigger: 'any other query',
  },
]
