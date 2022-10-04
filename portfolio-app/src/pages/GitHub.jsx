import { Octokit, App } from "octokit";
import React, {useState, useEffect} from 'react'
import axios from "axios";
import "./GitHub.css"
export default function GitHub() {

    const octokit = new Octokit({ auth: process.env.gh_personal_access_token });
    const [user,setUser] = useState([])
    console.log("hey")
    useEffect(() => {
        const init = async () =>{
            // const {data } = await octokit.rest.users.getAuthenticated();
            const {data} = await octokit.rest.repos.listForUser({username: "BenFSaks"})
            console.log("Hello, %s", JSON.stringify(data , null, 4));
            const userInfo = []
            for (let i in data){
                // const res = await axios.get(data[i].languages_url)
                userInfo.push(data[i].name)
                // userInfo.push(<div className="project-card"><h1 >{data[i].name}</h1></div>)
            }
            setUser(userInfo)
            // const json_getAllKeys = data => (
            // data.reduce((keys, obj) => (
            //         keys.concat(Object.keys(obj).filter(key => (
            //         keys.indexOf(key) === -1))
            //         )
            //     ), [])
            // )
            // const json = JSON.parse(data.reduce)
            console.log(userInfo)
            // for (let info in data){
            //     for(let key in data[info]){
            //         if (data[info][key] != Object)
            //             console.log(data[info][key])
            //             userInfo.push(<li>{key} : {data[info][key]}</li>)

            //     }
            // }

            

        }
        init()
    }, [])
    const listItems = user.map((item) =>{
        <li>{item}</li>
    })
    return (
        <>
            
            <div className="container">
                {user.map((project) =>{
                    return(
                        <div >
                            <p>{project}</p>
                            <p>Lorem ipsum dolor sit amet.</p>
                        </div>
                    )

                })}

            </div>
            {/* <h1>Hello </h1> */}
            {/* <ol>{listItems}</ol> */}
        </>
        
    )
}
