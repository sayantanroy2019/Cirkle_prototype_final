export function ChatMessage({ message }) {
  return (
    <li className="flex items-start gap-2.5">

      <img
        src={message.avatar}
        alt={message.senderName}
        loading="lazy"
        className="w-9 h-9 rounded-full object-cover object-top flex-shrink-0 mt-5"
      />

      <div className="flex flex-col items-start max-w-[75%]">
        <span className="font-body text-[11px] font-semibold text-cirkle-yellow mb-1">
          {message.senderName}
        </span>
        <div className="bg-cirkle-card border border-cirkle-border rounded-[14px] rounded-tl-[4px] px-3 py-2.5 font-body text-[13px] font-normal text-white leading-snug">
          {message.text}
        </div>
        <span className="mt-1 font-body text-[10px] font-normal text-cirkle-text-muted">
          {message.time}
        </span>
      </div>

    </li>
  );
}

export default ChatMessage;
