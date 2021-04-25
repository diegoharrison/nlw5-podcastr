//SPA

export default function Home(props) {

  console.log(props.episodes)
  
  return (
    <div>
      <h1>Index</h1>
      <p>{JSON.stringify(props.episodes)}</p>
    </div>
  )
}

//SRA
// export async function getServerSideProps() {
//   const response = await fetch('http://localhost:3333/episodes')
//   const data = await response.json()  

//   return {
//     props: {
//       episodes: data,
//     }
//   }
// }


//SSG
export async function getStaticeProps() {
  const response = await fetch('http://localhost:3333/episodes')
  const data = await response.json()  

  return {
    props: {
      episodes: data,
    },
    revalidate: 60 * 60 * 8,
  }
}