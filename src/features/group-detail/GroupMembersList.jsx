import GroupMemberRow from './GroupMemberRow';

export function GroupMembersList({ members, boys, girls }) {
  return (
    <section className="bg-cirkle-black">

      <div className="px-4 pt-6 pb-0">
        <h3 className="font-body text-[18px] font-bold text-white">
          Members
        </h3>
        <p className="mt-0.5 font-body text-[13px] font-medium text-cirkle-text-muted">
          {members.length} members
        </p>
      </div>

      <ul className="mt-3 px-4">
        {members.map((member, index) => (
          <GroupMemberRow
            key={member.id}
            member={member}
            isLast={index === members.length - 1}
          />
        ))}
      </ul>

      <div className="mt-4 mb-5 flex items-center justify-center gap-3 font-body text-[13px] font-medium text-white border-t border-cirkle-border pt-4 mx-4">
        <span className="flex items-center gap-1.5">
          <span role="img" aria-label="male" className="text-[15px]">♂</span>
          {boys} Boys
        </span>
        <span className="text-cirkle-text-muted">·</span>
        <span className="flex items-center gap-1.5">
          {girls} Girls
          <span role="img" aria-label="female" className="text-[15px]">♀</span>
        </span>
      </div>

    </section>
  );
}

export default GroupMembersList;
