import React from "react"

class Home extends React.Component{

    constructor(){
        super()
    }

    render(){
        return(
           <>
            <section class="part1">
        <div class="bg-latar-biru p-5">
            <div class="container d-flex">
                <div class="col-6 d-flex align-items-center">
                    <div>
                         <h6 class="text-white">Hello, my name</h6>
                         <h1 class="text-white">ALAXE SMITH</h1>
                         <h4 class="text-white my-4">Web Designer</h4> 
                         <div class="d-flex gap-2">
                             <button class="btn bg-white text-primary border border-primary rounded-pill">Download CV</button>
                             <button class="btn bg-primary text-white border border-white rounded-pill">Play Video</button>
                         </div>
                    </div>
                 </div>
                 <div class="col-6 d-flex justify-content-center">
                     <div class="avatar rounded-circle overflow-hidden">
                         <img src="https://png.pngtree.com/png-clipart/20230927/original/pngtree-man-avatar-image-for-profile-png-image_13001877.png" alt="" srcset=""/>
                     </div>
                 </div>
            </div>
        </div>
    </section>
    <section class="part2">
        <div class="container p-5">
            <div class="row">
                <div class="col-12" style={{position:'relative'}}>
                    <h1 class="text-center combined" style={{fontSize:'90px'}}>ABOUT</h1>
                    <h3 class="text-center text-primary" style={{fontWeight: 'bold',position:'absolute',left:0,right:0,top:'30%'}}>ABOUT ME</h3>
                </div>
                <div class="flex flex-column">
                    <h5>UI/UX Designeer & Web Developer</h5>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</p>
                    <ul>
                        <li><b>Name</b> : ALAXE SMITH</li>
                        <li><b>Degree</b> : S1</li>
                        <li><b>Phone</b> : 082388587200</li>
                        <li><b>Address</b> : Jl. Kebangsaan</li>
                        <li><b>Birthday</b> : 18 Agustus 2002</li>
                        <li><b>Experience</b> : 10 Years</li>
                        <li><b>Email</b> : Admin@gmail.com</li>
                        <li><b>Frelancer</b> : Available</li>
                      </ul>  
                </div>
            </div>
        </div>
    </section>
           </>
        )
    }
}

export default Home
