export default function ProfileCard() {
  return (
    <>
      <img
        className="w-24 h-24 rounded-full mb-4"
        src="/images/kartik.jpg"
        alt="Profile"
      />
      <h2 className="text-xl font-bold">Kartik Kumar</h2>
      <p className="text-center text-sm mt-2 mb-4">
        Hi, my name is Kartik Kumar and I'm a software engineer.
      </p>
    </>
  );
}
