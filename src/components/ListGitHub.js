import React,{useState,useEffect} from 'react'
import {Table,TableContainer,TableCell,TableHead,TableRow,TableBody,Paper} from '@material-ui/core'

function ListGitHub() {
    const [finalResult , setFinalResults] = useState([])

    async function getGitHubAccount (){
        const results = await fetch('https://api.github.com/search/repositories?q=created:">2018-09-30"language:python&sort=stars&order=desc&per_page=10')
        const finalResult = await results.json()
        setFinalResults(finalResult.items)
    }



    useEffect(()=>{
        getGitHubAccount()
    })
    return (
        <div>
            <TableContainer component={Paper} className="TableContainer">
      <Table  aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center" variant="head">ID</TableCell>
            <TableCell align="right" variant="head">Name</TableCell>
            <TableCell align="right" variant="head">URL</TableCell>
            <TableCell align="right" variant="head">Language</TableCell>
            <TableCell align="right" variant="head">description</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {finalResult.map((row) => (
            <TableRow key={row.id}> 
              <TableCell align="right">{row.id}</TableCell>
              <TableCell align="right">{row.name}</TableCell>
              <TableCell align="right">{row.url}</TableCell>
              <TableCell align="right">{row.language}</TableCell>
              <TableCell align="right">{row.description}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        </div>
    )
}

export default ListGitHub
