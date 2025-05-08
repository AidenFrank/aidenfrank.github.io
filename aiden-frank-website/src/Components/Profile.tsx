function Profile() {
  return (
    <div className="lg:m-3 flex flex-col lg:flex-row space-x-4 items-center justify-center lg:justify-around">
      <img
        src="/src/assets/headshot.jpg"
        className="rounded-3xl max-h-60 m-0"
      ></img>
      <div className="p-3 lg:p-0 text-5xl lg:text-8xl whitespace-nowrap font-[Nunito]">
        Aiden Frank
      </div>
    </div>
  );
}

export default Profile;
