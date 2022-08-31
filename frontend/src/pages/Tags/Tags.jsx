import LeftSidebar from '../../components/LeftSidebar/LeftSidebar'
import TagList from './TagList'

import '../Home/Home.css'
import './Tags.css'
const Tags = () => {
  const dataForDevelopment = [
    {
      id: 0,
      tagName: 'javaScript',
      tagDescription:
        'For questions regarding programming in ECMAScript (JavaScript/JS) and its various dialects/implementations (excluding ActionScript). Note...',
    },
    {
      id: 1,
      tagName: 'python',
      tagDescription:
        'Python is a multi-paradigm, dynamically typed, multi-purpose programming language. It is designed to be quick to learn, understand, and...',
    },
    {
      id: 2,
      tagName: 'java',
      tagDescription:
        "Java is a high-level object oriented programming language. Use this tag when you're having problems using or understanding the language itself. This...",
    },
    {
      id: 3,
      tagName: 'c#',
      tagDescription:
        'C# (pronounced "see sharp") is a high level, statically typed, multi-paradigm programming language developed by Microsoft. C# code usually targets...',
    },
    {
      id: 4,
      tagName: 'php',
      tagDescription:
        'PHP is a widely used, open source, general-purpose, multi-paradigm, dynamically typed and interpreted scripting language originally designed...',
    },
    {
      id: 5,
      tagName: 'css',
      tagDescription:
        'CSS (Cascading Style Sheets) is a representation style sheet language used for describing the look and formatting of HTML (HyperText Marku...',
    },
    {
      id: 6,
      tagName: 'IOS',
      tagDescription:
        'iOS is the mobile operating system running on the Apple iPhone, iPod touch, and iPad. Use this tag [ios] for questions related to programming on...',
    },
    {
      id: 7,
      tagName: 'mysql',
      tagDescription:
        'MySQL is a free, open-source Relational Database Management System (RDBMS) that uses Structured Query Language (SQL). DO NOT USE this tag...',
    },
    {
      id: 8,
      tagName: 'sql',
      tagDescription:
        'Structured Query Language (SQL) is a language for querying databases. Questions should include code examples, table structure, sample data...',
    },
  ]

  return (
    <div
      className="home-container-1"
      style={{ marginTop: '40px', minHeight: '100vh' }}
    >
      <LeftSidebar />
      <div className="tag-container">
        <h1 className="tags-h1">Tags</h1>
        <p className="tags-p">
          A tag is a keyword or a label that categorizes your question with
          order, similar questions.
        </p>
        <p className="tags-p">
          Using right tag makes it easier for others to find and answer your
          question.
        </p>
        <div className="tags-list-container">
          {dataForDevelopment.map((e) => (
            <TagList
              tagName={e.tagName}
              tagDescription={e.tagDescription}
              key={e.id}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Tags
