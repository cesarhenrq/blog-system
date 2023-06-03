# Blog System
This repository houses a back-end solution for creating and managing a fully functional blogging platform.

# Overview
The Back-End Blog System is built with a focus on scalability and extensibility. It provides a reliable and feature-rich environment for handling aspects of a blog, including user management, post creation.

# Technologies Used
### Programming Language: TypeScript
### Framework: Express
### Database: MongoDB

# Installation
1. First clone this repo with the following command line:

  `
    git clone https://github.com/cesarhenrq/blog-system.git
  `

2. Then navigate to project folder:

  `
    cd blog-system
  `

3. Now run this command, to install project dependencies:

  `
    npm i
  `

4. Set up your envoiriment variables. Create and file .env at the project root and create two variables like as follow:

  `
    DATABASE_URL=YOUR_DB_URL
    PORT=ANY_PORT_YOU_PREFER
  `

# Usage
This API has 3 routes. Explained as follow:

1. POST: BASE_URL/users
  Through this route you can create an user, passing the following properties at request body: fullname, nickname and email.
2. POST: BASE_URL/posts
  Through this route you can create an post and associate it to an user, passing the following properties at request body: content, authorId.
3. GET: BASE_URL/users
  Through this route you can fetch all user informations and his following posts. The information is pagineted that has page equal 1 and limit equal   10 by default, but if your pass some of these as query you can set up the page and the limit as you want.
  
# Entity
## User
| Properties | Type | Constraints |
|--- |--- |--- |
| id | ObjectId | unique |
| fullname | string | required |
| nickname | string | required |
| email | string | required, unique |
| postos | string[] | none |

## Post
| Properties | Type | Constraints |
|--- |--- |--- |
| id | ObjectId | unique |
| content | string | required, minlength(1), maxlength(240) |
| author | string | required |

# Database Diagram
The entities and its relations on database are ilustrated at the following diagram:

![Diagram](https://uploaddeimagens.com.br/images/004/493/263/full/adasdasda.drawio_%281%29.png?1685790904)

# Contributions
Contributions to the Back-End Blog System are more than welcome! If you find any issues, bugs, or have suggestions for improvements, please feel free to submit a pull request or open an issue.

# License
This project is licensed under the MIT License - see the LICENSE.md file for details.
