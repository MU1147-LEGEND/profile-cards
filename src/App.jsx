import cover from './assets/images/cover.jpeg';
import profile from './assets/images/profile.jpeg';
import Button from './assets/components/button';

const App = () => {

  return (
    <>
      <h2 className='w-4/5 m-auto -mb-16 mt-8 text-center text-2xl font-semibold'>People you may know</h2>
      <section className='flex items-center justify-center h-screen'>
        <div className="cards lg:flex lg:gap-10 space-y-5 rounded-md lg:space-y-0 container lg:w-5/6 w-[30] m-auto bg-slate-200 p-8">
          <div className="card flex flex-col items-center justify-center lg:w-1/3 bg-slate-300 rounded-xl pb-6 shadow-md shadow-indigo-600/25">
            <div className="profile-cover flex flex-col items-center relative mb-16 w-full">
              <img src={cover} alt="cover-pic" className='w-full h-28 rounded-t-xl' />
              <img src={profile} alt="cover-pic" className='w-24 h-24 rounded-full ring-2 ring-white absolute top-1/2 ' />
            </div>
            <div className="profile-info text-center">
              <p className="name-role">
                <span className="name text-2xl font-semibold">Sujana Islam</span><span className='text-gray-700 ml-2 text-sm'>2nd</span>
              </p>
              <div className="position mt-10">
                <p className='w-4/5 m-auto'>Graphics Designer || Also interested in UI/UX Design</p>
                <p className='w-4/5 m-auto opacity-70'>M.K Alam Ubayed is a mutual connection</p>
                <Button keys={1}/>
              </div>
            </div>
          </div>
          <div className="card flex flex-col items-center justify-center lg:w-1/3 bg-slate-300 rounded-xl pb-6 shadow-md shadow-indigo-600/25">
            <div className="profile-cover flex flex-col items-center relative mb-16 w-full">
              <img src={cover} alt="cover-pic" className='w-full h-28 rounded-t-xl' />
              <img src={profile} alt="cover-pic" className='w-24 h-24 rounded-full ring-2 ring-white absolute top-1/2 ' />
            </div>
            <div className="profile-info text-center">
              <p className="name-role">
                <span className="name text-2xl font-semibold">Jubayed Hasan</span><span className='text-gray-700 ml-2 text-sm'>2nd</span>
              </p>
              <div className="position mt-10">
                <p className='w-4/5 m-auto'>Graphics Designer || Also interested in UI/UX Design</p>
                <p className='w-4/5 m-auto opacity-70'>M.K Alam Ubayed is a mutual connection</p>
                <Button keys={2}/>
              </div>
            </div>
          </div>
          <div className="card flex flex-col items-center justify-center lg:w-1/3 bg-slate-300 rounded-xl pb-6 shadow-md shadow-indigo-600/25">
            <div className="profile-cover flex flex-col items-center relative mb-16 w-full">
              <img src={cover} alt="cover-pic" className='w-full h-28 rounded-t-xl' />
              <img src={profile} alt="cover-pic" className='w-24 h-24 rounded-full ring-2 ring-white absolute top-1/2 ' />
            </div>
            <div className="profile-info text-center">
              <p className="name-role">
                <span className="name text-2xl font-semibold">Fazle Rabbi</span><span className='text-gray-700 ml-2 text-sm'>2nd</span>
              </p>
              <div className="position mt-10">
                <p className='w-4/5 m-auto'>Graphics Designer || Also interested in UI/UX Design</p>
                <p className='w-4/5 m-auto opacity-70'>M.K Alam Ubayed is a mutual connection</p>
                <Button keys={3}/>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default App