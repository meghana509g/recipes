function Instagram_profile({name,pic,count,posts}){
    return <div style={{ textAlign:"center",margin:'2px',height:'400px',width:'200px',border:'2px solid white',alignItems:'center' }}>
        <img style={{borderRadius:'50%',height:'100px',width:'100px'}} src={pic}/>
        <h2>Name - {name}</h2>
        <h2>Followers -  {count}</h2>
        <h2>Posts -  {posts}</h2>
    </div>
}
export default Instagram_profile;