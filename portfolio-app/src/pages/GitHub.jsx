import { Octokit, App } from "octokit";
import React, {useState, useEffect} from 'react'
import axios from "axios";
import "./GitHub.css"
export default function GitHub() {

    const octokit = new Octokit({ auth: process.env.gh_personal_access_token });
    const [user,setUser] = useState([])
    const [lang,setLanguage] = useState([])
    useEffect(() => {
        const init = async () =>{
            // const {data } = await octokit.rest.users.getAuthenticated();
            const {data} = await octokit.rest.repos.listForUser({username: "BenFSaks"})
            // console.log("Hello, %s", JSON.stringify(data , null, 4));
            const userInfo = []
            const languageInfo = []
            for (let i in data){
                // const res = await axios.get(data[i].languages_url)
                userInfo.push(data[i].name)
                const api = `https://api.github.com/repos/BenFSaks/${data[i].name}/languages`
                const res = await fetch(api)
                const languages = await res.json()
                languageInfo.push(languages)
                for (let language in languages){
                    // console.log(`language ${language} = ${languages[language]}`)
                }
                // userInfo.push(<div className="project-card"><h1 >{data[i].name}</h1></div>)
            }
            setLanguage(languageInfo)
            setUser(userInfo)

            

        }
        init()
    }, [])
    const listItems = user.map((item) =>{
        <li>{item}</li>
    })
    return (
        <>
            
            <div className="container">
                {user.map((project, indx) =>{

                    let total = 0
                    for (let i in lang[indx]){
                        total += lang[indx][i]
                    }
                    let langList = ""
                    for (let i in lang[indx]){
                        let perc = Math.floor((lang[indx][i] / total) * 100)
                        if (perc == 0){
                            perc = (lang[indx][i] / total) * 100
                            perc = perc.toFixed(2)
                        }
                        langList += `${i} = ${perc}% `



                    }

                    let projectLink = `https://github.com/BenFSaks/${project}`
                    if (project === "BenFSaks"){
                        projectLink =  `https://github.com/BenFSaks/`
                    }
                    return(
                        <div >
                            <p>{project}</p>
                            <a href={projectLink}>View Here</a>
                            <div>
                                {langList}
                            </div>

                        </div>
                    )

                })}

            </div>
            {/* <h1>Hello </h1> */}
            {/* <ol>{listItems}</ol> */}
        </>
        
    )
}
