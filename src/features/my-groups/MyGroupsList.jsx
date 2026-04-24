import MyGroupCard from './MyGroupCard';

export function MyGroupsList({ groups, onGroupClick }) {
  return (
    <section className="px-4 mt-5 flex flex-col gap-4 md:max-w-[640px] md:mx-auto lg:max-w-[960px] lg:grid lg:grid-cols-2 lg:gap-4">
      {groups.map((group) => (
        <MyGroupCard key={group.id} group={group} onClick={() => onGroupClick?.(group)} />
      ))}
    </section>
  );
}

export default MyGroupsList;
