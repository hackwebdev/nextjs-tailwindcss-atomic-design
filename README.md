NextJS app with TailwindCSS

```
$ npx create-next-app .

delete the styles folder

have a folder for my component the style and the component file will be inside of that folder

- the principle of locality
- everything the components needs without jumping all over the directory structure

Separate the production distribution essentially from the source

- create src/
- mode pages/ inside the src/

api/ - is where you put all the server side stuff in next js
_app.js - wraps all the pages automatically

index.js - to LandingPage component

create a page inside of pages for my homepage and i may have other landing pages too
and its just a matter of reference importing referencing that so you could switch around
exactly which one is your homepage

_app.js - a high order component
No single file for components because you cant put extra artifacts or assets
replace _app.js into _app folder
move _app.js inside _app/
rename _app.js to index.jsx
remember if you require a folder in javascript it will automatically  look for index.js or index.jsx
rename the component to App
then from
    function App({ Component, pageProps }) { } into
    export default function App({ Component, pageProps }) { }

the LandingPage will get wrap inside the the special App component
we have the homepage at the route of index

Layout component
src/ui/ - atomic elements the smallest type of component that you can have in your react app ex. button, textbox, paper etc.
        - if your talking a single component
src/features/ - are when you put a bunch of these ui elements together to create a single feature then you take a feature and you put it on a page
              - if it is a group of components

src/features/index.js
edf - export default function

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

build your own components it seems complex
- you build a component that it does only what you want it to do

page concept
a good ui element

Note: go to settings / label / workbench : short

when building a component
- put the actual code wherever your working and get it to work and then extract it out into a component

what is a page component - a page is a grouping of a concept. concept means a page has a url, it has a route that you can go to and when you go to that route you get the component that matches the route. a page also has a title. so that when your in your browser when you go to different pages each of those different pages on the tab will have a different title. this is realy important for SEO

page component is like a header component
- has the head with title tag inside

Apply Styling
$ npm install -D tailwindcss@latest postcss@latest autoprefixer@latest
$ npx tailwindcss init -p

include the tailwindcss in _app/index.js
    import './global.css'
create _app/globals.css
    paste inside the tailwind directives

Restart the server after all the changes

Create react component for all of the element that way theres a component for behavior
h1,h2,h3 tags for hedings only the rest is unimportant
    ui/headings/h1/index.js
    ui/headings/h1/styles.module.css

menu links with router:

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

pages/courses/[slug]/index.js
- square brackets denotes to nextjs that this is a parameter

how to do parameters in nextjs routes:

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
