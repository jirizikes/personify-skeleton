import React, { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import {
  RecentlySearched,
  RECENTLY_SEARCHED_MAX_ITEMS,
  Result,
} from '../components';
import { Layout } from '../components/Layout';
import NameCard from '../components/NameCard';
import { NameInput } from '../components/NameInput';
import { ApiService } from '../services';
import { Nullable } from '../types';

const LOCAL_STORAGE_RECENTLY_SEARCHED = 'RECENTLY_SEARCHED';

export const saveRecentlySearchedToLocalStorage = (
  name: string,
  recentlySearched: string[]
): string[] => {
  recentlySearched.unshift(name);
  recentlySearched = recentlySearched.slice(0, RECENTLY_SEARCHED_MAX_ITEMS);
  localStorage.setItem(
    LOCAL_STORAGE_RECENTLY_SEARCHED,
    JSON.stringify(recentlySearched)
  );
  return recentlySearched;
};

export const Dashboard: React.FC = () => {
  const apiService = new ApiService();

  const [searchParams] = useSearchParams();
  const queryName = searchParams.get('name') ?? null;

  const [name, setName] = React.useState<Nullable<string>>(queryName);
  const [isSubmitted, setIsSubbmited] = React.useState<boolean>(false);
  const [result, setResult] = React.useState<Result>();
  const [recentlySearched, setRecentlySearched] = React.useState<string[]>(
    () => {
      const saved = localStorage.getItem(LOCAL_STORAGE_RECENTLY_SEARCHED);
      const initialValue = saved ? JSON.parse(saved) : null;
      return initialValue || [];
    }
  );

  const handleData = async (saveToLocalStorage: boolean) => {
    if (name) {
      const genderData = await apiService.getGenderData(name);
      const ageData = await apiService.getAgeData(name);
      const nationalityData = await apiService.getNationalityData(name);

      if (saveToLocalStorage) {
        setRecentlySearched(
          saveRecentlySearchedToLocalStorage(name, recentlySearched)
        );
      }

      setResult({
        name: name,
        gender: genderData?.gender,
        age: ageData?.age,
        nationality: nationalityData?.country.map(({ country_id }) => {
          return country_id;
        }),
      });
      setIsSubbmited(true);
    }
  };

  const handleForm = async () => {
    handleData(true);
  };

  useEffect(() => {
    if (queryName) {
      handleData(false);
    }
  }, []);

  return (
    <Layout>
      <div className="row justify-content-sm-center text-left py-10">
        <div className="col-sm-7 col-md-5 mb-4 mt-4">
          <NameInput name={name} setName={setName} handleForm={handleForm} />
          <RecentlySearched recentlySearched={recentlySearched} />
        </div>
      </div>
      <div className="row justify-content-sm-center text-left py-10">
        <div className="col-sm-7 col-md-7">
          {isSubmitted ? (
            <>
              <NameCard result={result}></NameCard>
            </>
          ) : (
            ''
          )}
        </div>
      </div>
    </Layout>
  );
};
