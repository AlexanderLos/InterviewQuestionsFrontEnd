document.addEventListener('DOMContentLoaded', () => {
    const interviewQuestions = [
        {
            question: "Are you currently employed?",
            answer: "Not at the moment."
        },
        {
            question: "What are the most important skills and qualities that a front end developer should have?",
            answer: `
                Knowledge in Core and Modern Technologies & Frameworks: Proficiency in HyperText Markup Language (HTML), Cascading Style Sheets (CSS), JavaScript, and frameworks like React is essential for front-end web development.<br>
                Responsive Design: Ensuring websites work well on different devices.<br>
                User Experience and User Interaction Principles: A good understanding of UX & UI principles helps create engaging interactions.<br>
                Project Planning: Writing and interpreting user stories helps in understanding and implementing the user’s needs. Planning the site’s layout with wireframes can also ensure a clear structure and design flow.<br>
                Adaptability: Keeping up to date with the latest technology trends is essential for innovation and staying relevant in the field.<br>
                Collaboration: Strong cooperation and the ability to work well with other developers.
            `
        },
        {
            question: "What sparked your interest in Front-End Developing?",
            answer: `
                I’ve always had a good eye for quality, and it definitely showed during my time at General Assembly's Full-Stack Immersive program. We completed four capstone projects, each requiring both a front end and back end component. I spent much more time perfecting the front end since I found the back end straightforward to set up. I enjoyed making the site look appealing and function smoothly since I believe that is a huge factor in attracting users. I enjoyed getting compliments from my peers as it would make me want to only build better products. I frequently explored new tech stacks, bookmarked other sites for design inspiration, and watched videos on optimizing code.<br>
                When the bootcamp was nearing its finish, I would regularly meet up with a friend of mine who is a software developer at another company. We discussed different ways to implement code to make the front end look sharper, run smoother, and be more efficient. These sessions helped me gain practical insights and refine my development approach. Overall, my experience at General Assembly honed my front-end development skills and deepened my passion for creating high-quality web applications.
            `
        },
        {
            question: "How do you stay up to date with technology news?",
            answer: `
                Typically through a couple of social media platforms and websites, alongside some content creators who put out content regularly for the latest tech news. I am also in group chats and in frequent conversation with other developers. Some sites I use are X, Daily.dev (a platform that lets you communicate with other developers and share resources), Discord and Youtube (Fireship’s Videos are great).
            `
        },
        {
            question: "Have you worked with Photoshop as a Front-End Developer? For what purpose?",
            answer: `
                So I have had experience with Photoshop since I was in middle school and my friend who recently built out an application for his company needed custom pins, buttons and styling so I helped him build everything out. I find photoshop super simple to use and implement.
            `
        },
        {
            question: "Are there any languages or frameworks that you would like to learn in the future? How would you go about teaching yourself? Why did you pick those languages/frameworks?",
            answer: `
                I am currently in the process of learning Three.js and TypeScript. Three.js is a 3D front-end software for creating immersive web graphics, while TypeScript is JavaScript with static types, which helps catch errors early and makes code more maintainable. I start with YouTube tutorials to get an initial understanding, then move on to reading the documentation for a deeper grasp of the basics. If YouTube and the docs aren't enough, I reach out to developers who have experience with these technologies or find online courses that cover the topics. Trial and error, by implementing the code into my own projects, also helps me learn the concepts. It never takes too long for me to pick up on something new.<br>
                I chose Three.js and TypeScript because they serve a greater purpose. TypeScript makes JavaScript more robust, and Three.js can elevate my front-end skills because of the addition of advanced 3D graphics into my projects.
            `
        },
        {
            question: "In the context of CSS styling can you explain what does display-style: inline-block stand for?",
            answer: `
                display-style: inline-block allows an element to have the properties of both inline and block elements. It sits inline with other elements, but you can set its width and height like a block element. This makes it great for layouts where you want elements to flow in a line but still be able to control their size and spacing.
            `
        },
        {
            question: "If you have a <ul> element with several <li> elements, how would you go about setting up these elements in a row by using HTML and CSS?",
            answer: `
            HTML: <br>
            &lt;div class="list"&gt; <br>
                &lt;ul id="row"&gt; <br>
                    &lt;li&gt;Item 1&lt;/li&gt; <br>
                    &lt;li&gt;Item 2&lt;/li&gt; <br>
                    &lt;li&gt;Item 3&lt;/li&gt; <br>
                    &lt;li&gt;ETC&lt;/li&gt; <br>
                &lt;/ul&gt; <br>
            &lt;/div&gt; <br>
            <br>
            CSS: <br>
            #row li {<br>
                display: inline;<br>
            }
        `
        },
        {
            question: "In CSS styling when would you use floats? How do they work?",
            answer: `
                Float is used to position an element to the left or right within its container, allowing other elements to flow around it. This is useful for creating layouts where you want text to wrap around an image, or when you need side by side columns. For example, you can float an image to the left so that text wraps around it on the right. This can be done with Flexbox or Grid as well.
            `
        },
        {
            question: "Explain the notion of responsive design and how it works? Use an example if you like.",
            answer: `
                Responsive design basically ensures a website looks and functions well across different devices and screen sizes. It uses flexible layouts, media queries, and scalable images to adapt to the user's device.
            `
        },
        {
            question: "When would you use: clear: both;?",
            answer: `
                You use clear: both; to ensure that an element does not wrap around any floated elements on either side. This is useful for clearing floats and making sure that the following content starts below any floated content.
            `
        },
        {
            question: "What is ECMAScript?",
            answer: `
                ECMAScript is the official standard that defines the rules and features for JavaScript. It ensures that different JavaScript implementations follow the same guidelines, making the language consistent across all platforms.Versions like ES6 introduced improvements like let, const, and arrow functions.
            `
        },
        {
            question: "What is the difference between == and === in JS?",
            answer: `
                == checks if values are equal, even if they are different types, like 2 == “2”. <br>
                === checks if values and types are exactly the same, so 2 === “2” is false.
            `
        },
        {
            question: "Can you enumerate all JavaScript data types?",
            answer: `
                String - Text, like “Hello world”. <br>
                Number - Numeric values, like 5. <br>
                Boolean - True or false values. <br>
                Null - Absence of any object value. <br>
                Undefined - Variable that has been declared but not assigned a value. <br>
                Object - Collections of properties. {key : value} <br>
                Symbol - Unique and immutable values. <br>
                BigInt - Integers larger than the Number type can handle.
            `
        },
        {
            question: "What APIs have you worked with?",
            answer: `
                FourSquare (Geo Location), CoinDesk, CoinGecko, Google Translate, Apify (Web Scrapers), Apiary (Fortune Cookie API), Api Ninjas (Quotes API), Leaflet (Maps).
            `
        },
        {
            question: "What is jQuery and what is it commonly used for?",
            answer: `
                jQuery is a JavaScript library that makes HTML document event handling, animation, manipulation. It’s commonly used to ensure JavaScript programming is compatible across different browsers.
            `
        },
        {
            question: "How much will you request per hour if you are hired?",
            answer: "50$ per hour."
        },
        {
            question: "When can you start working for the company?",
            answer: "Immediately, or whenever needed."
        },
        {
            question: "Can you handle this position effectively?",
            answer: "Absolutely, I am familiar with everything listed in this interview and I am confident I can fulfill this role to the best of my abilities."
        }
    ];

    const interviewQuestionsContainer = document.getElementById('interview-questions');

    interviewQuestions.forEach(item => {
        const questionElement = document.createElement('div');
        questionElement.classList.add('question');
        
        const questionTitle = document.createElement('h2');
        questionTitle.textContent = item.question;
        
        const questionAnswer = document.createElement('p');
        questionAnswer.innerHTML = item.answer;
        
        questionElement.appendChild(questionTitle);
        questionElement.appendChild(questionAnswer);
        interviewQuestionsContainer.appendChild(questionElement);
    });
});
