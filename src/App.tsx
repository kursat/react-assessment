import React from 'react';
import CardRow from './components/layout/CardRow';
import Header from './components/layout/Header';
import useExperienceData from './hooks/useExperienceData';
import { useAppSelector } from './redux/hooks';

function App() {
  const user = useAppSelector((state) => state.auth.user);

  const { loading, data } = useExperienceData();

  console.log('loading: ', loading);
  console.log('data: ', data);

  return (
    <main className="">
      <Header>
        <div className="flex w-full justify-between items-center">
          <img className="h-6 m-2" src="/img/back.png" />
          <img className="h-6 m-2" src="/img/home.png" />
          <div className="flex flex-grow bg-white border-gray-200 mx-2 p-2 border-2 rounded-full items-center justify-between">
            <img className="h-6" src="/img/avatar.png" />
            <p>{user?.accountId}.near</p>
            <img className="h-2 mr-2" src="/img/down-arrow.png" />
          </div>
          <img className="h-6 m-2" src="/img/bell.png" />
          <img className="h-6 m-2" src="/img/gear.png" />
        </div>
      </Header>
      <div className="my-3 mx-4 flex items-center">
        <div className="flex-grow bg-gray-100 text-gray-300 rounded-md p-2 flex items-center">
          <img className="h-4 mx-3" src="/img/search.png" />
          Search experiences
        </div>
        <img className="h-6 mx-3" src="/img/filter.png" />
      </div>

      <div className="mx-4">
        <div className="font-semibold">Recent Experiences</div>
        {data.map((experience) => {
          return (
            <CardRow
              icon={experience.icon}
              title={experience.name}
              smallDescription={experience.shortDescription}
              memberInfo={experience.memberInfo}
            />
          );
        })}
        <div className="font-semibold">Popular Categories</div>
      </div>
    </main>
  );
}

export default App;
