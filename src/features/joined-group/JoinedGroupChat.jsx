import ChatMessage from './ChatMessage';

export function JoinedGroupChat({ messages }) {
  return (
    <section className="bg-cirkle-black px-4 pt-6 pb-4">
      <h3 className="font-body text-[16px] font-bold text-white mb-4">
        Group Chat
      </h3>
      <ul className="flex flex-col gap-3">
        {messages.map((msg) => (
          <ChatMessage key={msg.id} message={msg} />
        ))}
      </ul>
    </section>
  );
}

export default JoinedGroupChat;
