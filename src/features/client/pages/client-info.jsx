import Header from '../../../shared/UI/header';
import ClientForm from '../components/client-form';

const ClientInfo = () => {
  return (
    <div className="flex flex-col items-center gap-6 sm:gap-8 lg:gap-10 w-full h-full px-4 sm:px-6 lg:px-0">
      <Header
        heading={'Add Client Information'}
        desc={
          'This information helps Mediconsult personalize insurance calculations and maintain accurate client records.'
        }
      />
      <ClientForm />
    </div>
  );
};

export default ClientInfo;
