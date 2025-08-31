import { profileBadge } from '../data.js';

const ProfileBadge = () => {
  return (
    <div className='mt-10 px-4 border-y border-white/30'>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
        {profileBadge.map(badge => (
          <div key={badge.id}>
            <h1 className='bg-zinc-800 flex justify-left p-2 px-4 rounded-3xl font-mono'>
              {badge.nama_badge}
            </h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfileBadge;
