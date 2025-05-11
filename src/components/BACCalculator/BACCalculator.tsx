import { useForm, type SubmitHandler } from 'react-hook-form';
import type { IFormInput } from '../../interfaces/IFormInput';
import { Form } from '../Form/Form';
import Input from '../Input/Input';
import { Select } from '../Select/Select';
import SubmitButton from '../SubmitButton/SubmitButton';

function BACCalculator() {
  const formMethods = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);

  return (
    <Form formMethods={formMethods} onSubmit={onSubmit}>
      <Input name="bodyWeight" register={formMethods.register} type="number" />

      <Select
        name="weightMeasurement"
        register={formMethods.register}
        options={[
          { value: 'lbs', label: 'lbs' },
          { value: 'kg', label: 'kg' },
        ]}
      />

      <Input
        name="hoursSinceFirstDrink"
        register={formMethods.register}
        type="number"
      />

      <Input
        name="numberOfStandardDrinks"
        register={formMethods.register}
        type="number"
      />

      <Select
        name="gender"
        register={formMethods.register}
        options={[
          { value: 'female', label: 'Female' },
          { value: 'male', label: 'Male' },
        ]}
      />

      <SubmitButton />
    </Form>
  );
}

export default BACCalculator;
