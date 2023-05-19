/* eslint-disable react/no-unescaped-entities */

import Title from "../../../Title/Title";


const Blogs = () => {
  Title('Blogs')
    return (
      <div className="mt-10 container mx-auto flex flex-col gap-10 justify-center items-center content-center">
        <div className="">
          <h1 className="text-center text-2xl lg:text-4xl">
            What is an access token and refresh token? How do they work and
            where should we store them on the client-side?
          </h1>
          <p className=" text-center mt-5 text-lg text-yellow-500">
            Access Token: An access token is a credential that represents the
            authorization granted to a client application to access specific
            resources on behalf of a user. It is a short-lived token that is
            typically issued by an authentication server or an authorization
            server. The access token is included in each request to the
            protected resource, allowing the server to verify the client's
            authorization to access that resource. Access tokens have a limited
            lifespan and expire after a certain period.
          </p>
          <p className=" text-center mt-5 text-lg text-yellow-500">
            Refresh Token: A refresh token is a long-lived credential that is
            used to obtain a new access token when the current access token
            expires or becomes invalid. It is usually issued alongside an access
            token during the initial authorization process. The client
            application can use the refresh token to request a new access token
            without requiring the user to re-authenticate. Refresh tokens are
            typically more securely stored and have a longer lifespan compared
            to access tokens.
          </p>
        </div>
        <hr className="w-1/2" />
        <div>
          <h1 className="text-center text-2xl lg:text-4xl">
            Compare SQL and NoSQL databases?
          </h1>
          <p className="px- text-center mt-5 text-lg text-yellow-500">
            SQL Databases: Structured schema with fixed tables and columns
            Standardized SQL query language for data manipulation Vertical
            scalability with hardware upgrades Strong data integrity through
            ACID properties Suitable for structured and relational data in
            transactional systems, finance, and enterprise applications
          </p>
          <p className=" text-center mt-5 text-lg text-yellow-500">
            NoSQL Databases: Flexible and dynamic schemas Unique query
            mechanisms specific to each data model Horizontal scalability with
            distributed data across servers or clusters Flexible for handling
            changing data requirements Ideal for large-scale data, real-time
            data, and applications with varied data models like content
            management, social media, and IoT
          </p>
        </div>
        <hr className="w-1/2" />
        <div>
          <h1 className="text-center text-2xl lg:text-4xl">
            What is express js? What is Nest JS
          </h1>
          <p className=" text-center mt-5 text-lg text-yellow-500">
            Express.js is a popular and widely used web application framework
            for Node.js. It provides a minimalist and flexible set of tools and
            features for building web applications and APIs. Express.js
            simplifies the process of creating server-side applications by
            offering routing, middleware support, and an intuitive API for
            handling HTTP requests and responses. It allows developers to define
            routes, handle requests, manage cookies and sessions, and integrate
            with various middleware and templating engines. Express.js is known
            for its simplicity and lightweight nature, making it a popular
            choice for building fast and scalable web applications.
          </p>
          <p className=" text-center mt-5 text-lg text-yellow-500">
            Nest.js, on the other hand, is a progressive Node.js framework for
            building efficient, scalable, and maintainable server-side
            applications. It combines elements of both object-oriented
            programming (OOP) and functional programming (FP) to provide a
            modular and extensible architecture. Nest.js leverages TypeScript, a
            statically typed superset of JavaScript, and incorporates features
            inspired by Angular, such as dependency injection, decorators, and
            module-based organization. It offers built-in support for features
            like routing, middleware, authentication, database integration, and
            more. Nest.js promotes code reusability, testability, and
            scalability, making it suitable for complex enterprise applications.
          </p>
        </div>
        <hr className="w-1/2" />
        <div>
          <h1 className="text-center text-2xl lg:text-4xl">
            What is MongoDB aggregate and how does it work
          </h1>
          <p className=" text-center mt-5 text-lg text-yellow-500">
            MongoDB's aggregate is a powerful framework for performing complex
            data aggregation operations on collections. It allows you to process
            and transform data within MongoDB, enabling you to perform
            operations like filtering, grouping, sorting, joining, and
            performing calculations on the data. Aggregate operations work by
            specifying a pipeline of stages that data passes through. Each stage
            performs a specific operation on the data and passes the transformed
            result to the next stage in the pipeline. The stages can include a
            variety of operations, such as filtering documents, projecting
            specific fields, grouping data, performing calculations, sorting,
            and more. The result of the aggregate operation is returned as a
            single document or a set of documents.
          </p>
        </div>
      </div>
    );
};

export default Blogs;