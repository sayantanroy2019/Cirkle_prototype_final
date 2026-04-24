export function JoinedGroupMemberRow({ member, isLast }) {
  return (
    <li className={`flex items-center gap-3 py-3 ${!isLast ? 'border-b border-cirkle-border' : ''}`}>

      <img
        src={member.image}
        alt={member.name}
        loading="lazy"
        className="w-[52px] h-[52px] rounded-full object-cover object-top flex-shrink-0"
      />

      <div className="flex-1 min-w-0">

        <div className="flex items-center gap-2 flex-wrap">
          <span className="font-body text-[15px] font-bold text-white">
            {member.name}, {member.age}
          </span>
          {member.isOwner && (
            <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-cirkle-yellow text-cirkle-text-dark font-body text-[10px] font-bold uppercase tracking-[0.04em] whitespace-nowrap">
              Group Owner
            </span>
          )}
        </div>

        <p className="mt-0.5 font-body text-[12px] font-normal text-cirkle-text-muted truncate">
          {member.interests}
        </p>

      </div>
    </li>
  );
}

export default JoinedGroupMemberRow;
