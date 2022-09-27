import { Octokit, App } from "octokit";
import React, {useState, useEffect} from 'react'
import axios from "axios";
export default function GitHub() {

    const octokit = new Octokit({ auth: "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" });
    const [user,setUser] = useState("")
    useEffect(() => {
        const init = async () =>{
            // const {data } = await octokit.rest.users.getAuthenticated();
            const {data} = await octokit.rest.repos.listForUser({username: "BenFSaks"})
            // console.log("Hello, %s", JSON.stringify(data , null, 4));
            const userInfo = []
            for (let i in data){
                console.log(data[i].languages_url)
                const res = await axios.get(data[i].languages_url)
                console.log(res)
                userInfo.push(<li>{data[i].name}, {res.data}</li>)

            }
            // const json_getAllKeys = data => (
            // data.reduce((keys, obj) => (
            //         keys.concat(Object.keys(obj).filter(key => (
            //         keys.indexOf(key) === -1))
            //         )
            //     ), [])
            // )
            // const json = JSON.parse(data.reduce)
            console.log(data)
            // for (let info in data){
            //     for(let key in data[info]){
            //         if (data[info][key] != Object)
            //             console.log(data[info][key])
            //             userInfo.push(<li>{key} : {data[info][key]}</li>)

            //     }
            // }

            setUser(userInfo)
            

        }
        init()
    }, [])
    return (
        <>
            <h1>Hello </h1>
            <p>{user}</p>
        </>
        
    )
}
