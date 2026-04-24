export function GroupMemberRow({ member, isLast }) {
  return (
    <li className={`flex items-center gap-3 py-3 ${!isLast ? 'border-b border-cirkle-border' : ''}`}>

      <img
        src={member.image}
        alt={member.name}
        loading="lazy"
        className="w-[52px] h-[52px] rounded-full object-cover flex-shrink-0"
      />

      <div className="flex-1 min-w-0">

        <p className="font-body text-[15px] font-bold text-white truncate">
          {member.name},{' '}
          <span className="font-normal">{member.age}</span>
        </p>

        {member.isOwner && (
          <span className="mt-1 inline-block px-3 py-0.5 rounded-full bg-cirkle-yellow text-cirkle-text-dark font-body text-[10px] font-bold uppercase tracking-wide">
            Group Owner
          </span>
        )}

        {!member.isOwner && member.interests && (
          <p className="mt-0.5 font-body text-[12px] font-normal text-cirkle-text-muted">
            {member.interests}
          </p>
        )}

      </div>
    </li>
  );
}

export default GroupMemberRow;
