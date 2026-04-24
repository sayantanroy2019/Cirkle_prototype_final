import JoinedGroupMemberRow from './JoinedGroupMemberRow';

export function JoinedGroupMembers({ members, boys, girls }) {
  return (
    <section className="bg-cirkle-black px-4 pt-6 pb-2 border-b border-cirkle-border">

      <div className="flex items-start justify-between mb-3">

        <h3 className="font-body text-[18px] font-bold text-white">
          Members
        </h3>

        <div className="flex flex-col items-end gap-0.5">
          <span className="font-body text-[13px] font-medium text-cirkle-text-muted">
            {members.length} members
          </span>
          <span className="font-body text-[12px] font-medium text-cirkle-text-muted flex items-center gap-1">
            <span>♂♀</span>
            {boys} Boys, {girls} Girls
          </span>
        </div>

      </div>

      <ul>
        {members.map((member, index) => (
          <JoinedGroupMemberRow
            key={member.id}
            member={member}
            isLast={index === members.length - 1}
          />
        ))}
      </ul>

    </section>
  );
}

export default JoinedGroupMembers;
