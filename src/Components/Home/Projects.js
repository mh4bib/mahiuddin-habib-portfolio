import React from 'react';
import powerTools from '../Images/power-tools.png';
import bookFair from '../Images/book-fair.png';
import healthCorner from '../Images/health-corner.png';

const Projects = () => {
    return (
        <div className='mx-auto px-4 md:px-8 my-12'>
            <h1 className='text-3xl font-semibold my-4'>Projects</h1>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-8 w-[100%] md:w-[70%] mx-auto'>
                <div className="w-[100%] md:w-95 bg-base-100 shadow-xl rounded-xl">
                    <figure><img className='rounded-t-xl' src={powerTools} alt="Shoes" /></figure>
                    <div className="p-4">
                        <h2 className="text-2xl">
                            Power Tools
                        </h2>
                        <p>This is a full stack react projects. This is a fully Single Page Application Here used firebase to authenticate users, functionality for admin, secured APIs with json web token, used nodejs in backend</p>
                        <div className="card-actions justify-end">
                            <div className="badge badge-outline">ReactJs</div>
                            <div className="badge badge-outline">NodeJs</div>
                            <div className="badge badge-outline">Firebase</div>
                            <div className="badge badge-outline">Stripe</div>
                        </div>
                    </div>
                </div>

                <div className="w-[100%] md:w-95 bg-base-100 shadow-xl rounded-xl">
                    <figure><img className='rounded-t-xl' src={bookFair} alt="Shoes" /></figure>
                    <div className="p-4">
                        <h2 className="text-2xl">
                            Book Fair
                        </h2>
                        <p>It is a stock management website for book. Inventories are well decorated and well sorted to help manage accurately. Users can add and remove their product and update stock quantity. As it is a single page application, it is also rendered efficiently.</p>
                        <div className="card-actions justify-end">
                            <div className="badge badge-outline">ReactJs</div>
                            <div className="badge badge-outline">NodeJs</div>
                            <div className="badge badge-outline">Firebase</div>
                            <div className="badge badge-outline">Stripe</div>
                        </div>
                    </div>
                </div>

                <div className="w-[100%] md:w-95 bg-base-100 shadow-xl rounded-xl">
                    <figure><img className='rounded-t-xl' src={healthCorner} alt="Shoes" /></figure>
                    <div className="p-4">
                        <h2 className="text-2xl">
                            Health Corner
                        </h2>
                        <p>There is a home page and a banner, services section are below in the banner. The check out rout is a private route in this project In blogs section, I answered the 3 question. You can know about me in about me section</p>
                        <div className="card-actions justify-end">
                            <div className="badge badge-outline">ReactJs</div>
                            <div className="badge badge-outline">Firebase</div>
                            <div className="badge badge-outline">jwt</div>
                            
                        </div>
                    </div>
                </div>



            </div>
        </div>
    );
};

export default Projects;