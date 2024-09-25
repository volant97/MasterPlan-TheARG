import WordInputForm from "@/components/start/WordInputForm";

export default function Start() {
  return (
    <div className="flex flex-col justify-center items-center gap-14 text-3xl">
      <div className="flex flex-col items-center gap-3">
        <p>
          <span className="font-bold text-blue-500">마스터플랜</span>에 오신
          것을 환영합니다!
        </p>
        <p>
          최고의 <span className="font-bold text-yellow-500">마스터</span>가
          되실 당신을 기다리고 있었습니다.
        </p>
        <p>새로운 세계를 맞이할 준비가 되셨나요?</p>
        <p>위대한 시작을 외쳐주세요!</p>
      </div>
      <WordInputForm />
    </div>
  );
}
