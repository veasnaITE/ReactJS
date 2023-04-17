//name export 
export function Gallery(){
    return(
        <section>
            <h1 style={heading}>Amazing Cats</h1>
            <Profile />
            <Profile />
            <Profile />
        </section>
    )
}
function Profile(){
    return(
        <img 
        src="https://cdn.pixabay.com/photo/2018/09/11/11/47/animal-3669244_960_720.jpg" 
        alt="student"
        
        style={{margin:'10px',
        width:'600px'}}/>
)
}
//export default Gallery;
//object stylesheet
const heading = {
    textAlign:'center',
    fontSize:30,
    color:'blue'
}