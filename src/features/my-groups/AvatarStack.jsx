export function AvatarStack({ avatars }) {
  return (
    <div className="flex -space-x-2 flex-shrink-0">
      {avatars.map((avatar, index) => (
        <img
          key={avatar.id}
          src={avatar.src}
          alt={avatar.name}
          loading="lazy"
          style={{ zIndex: avatars.length - index }}
          className="w-9 h-9 rounded-full object-cover object-top ring-2 ring-cirkle-card"
        />
      ))}
    </div>
  );
}

export default AvatarStack;
