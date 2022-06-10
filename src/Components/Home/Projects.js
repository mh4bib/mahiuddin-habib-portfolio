import React from 'react';
import powerTools from '../Images/power-tools.png';
import bookFair from '../Images/book-fair.png';
import healthCorner from '../Images/health-corner.png';

const Projects = () => {
    return (
        <div className='mx-auto px-8'>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
                <div class="w-[100%] md:w-95 bg-base-100 shadow-xl rounded-xl">
                    <figure><img className='rounded-t-xl' src={powerTools} alt="Shoes" /></figure>
                    <div class="p-4">
                        <h2 class="text-2xl">
                            Power Tools
                        </h2>
                        <p>This is a full stack projects</p>
                        <div class="card-actions justify-end">
                            <div class="badge badge-outline">ReactJs</div>
                            <div class="badge badge-outline">NodeJs</div>
                            <div class="badge badge-outline">Firebase</div>
                            <div class="badge badge-outline">Stripe</div>
                        </div>
                    </div>
                </div>
                
                <div class="w-[100%] md:w-95 bg-base-100 shadow-xl">
                    <figure><img src={powerTools} alt="Shoes" /></figure>
                    <div class="p-4">
                        <h2 class="card-title">
                            Shoes!
                            <div class="badge badge-secondary">NEW</div>
                        </h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div class="card-actions justify-end">
                            <div class="badge badge-outline">Fashion</div>
                            <div class="badge badge-outline">Products</div>
                        </div>
                    </div>
                </div>
                
                <div class="w-[100%] md:w-95 bg-base-100 shadow-xl">
                    <figure><img src={powerTools} alt="Shoes" /></figure>
                    <div class="p-4">
                        <h2 class="card-title">
                            Shoes!
                            <div class="badge badge-secondary">NEW</div>
                        </h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div class="card-actions justify-end">
                            <div class="badge badge-outline">Fashion</div>
                            <div class="badge badge-outline">Products</div>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default Projects;