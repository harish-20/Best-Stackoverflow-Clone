export const greetUser = [
  {
    id: 'ask name',
    message: 'What is your name?',
    trigger: 'get name',
  },
  {
    id: 'get name',
    user: true,
    trigger: 'greet user',
  },
  {
    id: 'greet user',
    message: 'Hi {previousValue}, nice to meet you!',
    trigger: 'ask query',
  },
]

export const askQuery = [
  {
    id: 'ask query',
    message: 'do you have any query?',
    trigger: 'query option',
  },
  {
    id: 'query option',
    options: [
      {
        value: 'yes',
        label: 'yes',
        trigger: 'yes response',
      },
      {
        value: 'no',
        label: 'no',
        trigger: 'no response',
      },
    ],
  },
]

export const responseAskQuery = [
  {
    id: 'no response',
    message: 'Thank you have a nice day! anyother queries let me know.',
    trigger: 'another query',
  },
  {
    id: 'yes response',
    message: 'choose what is your query about...',
    trigger: 'query type',
  },
  {
    id: 'another query',
    options: [
      {
        value: 'yes',
        label: 'yes',
        trigger: 'yes response',
      },
    ],
  },
]

export const queryType = [
  {
    id: 'query type',
    options: [
      {
        label: 'Authentication',
        value: 'Authentication',
        trigger: 'authentication queries',
      },
      {
        label: 'Question',
        value: 'Question',
        trigger: 'question queries',
      },
      {
        label: 'Answer',
        value: 'Answer',
        trigger: 'answer queries',
      },
      {
        label: 'Others',
        value: 'Others',
        trigger: 'other queries',
      },
    ],
  },
]

export const anyOtherQuery = [
  {
    id: 'any other query',
    message: 'any other queries? feel free to ask me!',
    trigger: 'query option',
  },
]
