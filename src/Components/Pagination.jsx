function Pagination({current,onChange,total}) {
    const pages=new Array(total).fill(0).map((a,i)=>
    <button style={{borderColor:i+1===current ? "red" : "gray",marginTop:"15px",padding:'1rem',gap:'15px',marginLeft:"15px"}} 
    onClick={()=>onChange(i+1)}>{i+1}</button>)
    return (
    <div data-testid = "page-container">
    {pages}
    </div>
   
    );
  }
  
  export default Pagination;