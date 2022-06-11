import React from 'react';

const Project = ({project, setId}) => {
    const { _id, name, desc, picture1, picture2, picture3, bulletPoints } = project;

    return (
        <div>
            <div className="w-[100%] md:w-95 bg-base-100 shadow-xl rounded-xl">
                <figure><img className='rounded-t-xl' src={picture1} alt="project" /></figure>
                <div className="p-4">
                    <h2 className="text-2xl">
                        {name}
                    </h2>
                    <p>{desc.slice(0, 210)}...</p>
                    <div className="card-actions justify-end">
                        <div className="badge badge-outline">ReactJs</div>
                        <div className="badge badge-outline">NodeJs</div>
                        <div className="badge badge-outline">Firebase</div>
                        <div className="badge badge-outline">Stripe</div>
                    </div>
                    <label for="my-modal-6" class="btn modal-button" onClick={()=>setId(_id)}>open modal</label>
                    {/* <Link to={`/project-detail/${_id}`} className='btn btn-primary'>Detail</Link> */}
                </div>
            </div>

            {/* detail modal  */}
            {/* <input type="checkbox" id="my-modal-6" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <h3 class="font-bold text-lg">{name}</h3>
                    <p class="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
                    <div class="modal-action">
                        <label for="my-modal-6" class="btn">Yay!</label>
                    </div>
                </div>
            </div> */}

        </div>
    );
};

export default Project;