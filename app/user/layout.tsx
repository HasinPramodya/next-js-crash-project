export default function UserLayout({children,} :{chlidren: React.ReactNode}){

    return(
        <>
           <div>
               {" "}
               <h1 style={{color: "red"}}>This is a user Route</h1>
               {children}
           </div>
        </>
    )
}