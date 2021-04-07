NextJS with TailwindCSS - Atomic Design Structure

```
Install NextJS
$ npx create-next-app .

Install TailwindCSS
$ npm install -D tailwindcss@latest postcss@latest autoprefixer@latest
$ npx tailwindcss init -p


nextjs relative path
jsconfig.json
    {
    "compilerOptions": {
            "baseUrl": "./src",
            "paths": {
            "@/*": ["/*"],
            "@/api/*": ["/api/*"]
            }
        }
    }


Delete the styles folder

create a src/ and move pages/ inside the src/

replace _app.js with _app/index.jsx
 - it wraps all the pages automatically
 - start using this format:
    - shortcut is rfc
    export default function App({ Component, pageProps }) { }
 - import './globals.css'
_app/global.css - paste inside the tailwind directives

pages/index.js
 - LandingPage component
    export default function LandingPage() { } - wrapped with Layout from App component

src/ui/ - can’t be broken down any further without ceasing to be functional
 - component folder structure
    - index.js or index.jsx
    - styles.module.css
 - examples
    - headings  - h1/h2/h3
    - link
    - page - is like a header component

src/features/ - are relatively simple groups of UI elements functioning together as a unit
 - examples
    - layout component
    - src/features/layout/index.jsx

Note: Restart server to apply changes

Menu links with router:
- From ui/link used inside features/layout

    import NextLink from 'next/link'
    import { useRouter } from 'next/router'
    import styles from './styles.module.css'

    export default function Link({ children, href }) {
    const router = useRouter()
    console.log(router)

    return (
            <NextLink href={href}>
                <a className={router.asPath === href ? styles.active : ''}>{children}</a>
            </NextLink>
        )
    }

How to do parameters in NextJS routes:
- use of query selector on next/router

pages/courses/[slug]/index.js
- square brackets denotes to nextjs that this is a parameter

    import { useRouter } from 'next/router'

    import H1 from 'ui/headings/h1'
    import Page from 'ui/page'

    export default function CourseDetailsPage() {
    const router = useRouter()
    console.log(router.query.slug)

    return (
            <div>
                <Page
                    title={router.query.slug}
                    description='this is my nextjs description'
                >
                    <H1>{router.query.slug}</H1>
                </Page>
            </div>
        )
    }

```

Note:

The principle of locality

- Everything the components needs without jumping all over the directory structure
- Separate the production distribution essentially from the source

api/ - is where you put all the server side stuff in next js

When building a component

- put the actual code wherever your working and get it to work and then extract it out into a component

Page component - a page is a grouping of a concept. Concept means a page has a url, it has a route that you can go to and when you go to that route you get the component that matches the route. a page also has a title. so that when your in your browser when you go to different pages each of those different pages on the tab will have a different title. this is realy important for SEO. It has the head with title tag inside.

Note: Fix tab title to display parent folder: go to settings / label / workbench : short
