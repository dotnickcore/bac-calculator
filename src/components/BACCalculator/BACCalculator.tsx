import { useForm, type SubmitHandler } from 'react-hook-form';
import type { IFormInput } from '../../interfaces/IFormInput';
import { Form } from '../Form/Form';
import Input from '../Input/Input';
import { Select } from '../Select/Select';
import SubmitButton from '../SubmitButton/SubmitButton';
import Label from '../Label/Label';

function BACCalculator() {
  const formMethods = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);

  return (
    <Form formMethods={formMethods} onSubmit={onSubmit}>
      <div className="space-y-4">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <Label htmlFor="bodyWeight">Body Weight</Label>
            <Input
              name="bodyWeight"
              register={formMethods.register}
              type="number"
              placeholder="What is your body weight?"
            />
          </div>
          <div className="flex-1">
            <Label htmlFor="bodyWeight">Body Weight</Label>
            <Select
              name="weightMeasurement"
              register={formMethods.register}
              options={[
                { value: 'lbs', label: 'lbs' },
                { value: 'kg', label: 'kg' },
              ]}
            />
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <Label htmlFor="hoursSinceFirstDrink">Time since first drink</Label>
            <Input
              name="hoursSinceFirstDrink"
              register={formMethods.register}
              type="number"
              placeholder="How many hours since the first drink?"
            />
          </div>
          <div className="flex-1">
            <Label htmlFor="numberOfStandardDrinks">Number of standard drinks consumed</Label>
            <Input
              name="numberOfStandardDrinks"
              register={formMethods.register}
              type="number"
              placeholder="How many drinks have you had?"
            />
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <Label htmlFor="gender">Are you male or female?</Label>
            <Select
              name="gender"
              register={formMethods.register}
              options={[
                { value: 'female', label: 'Female' },
                { value: 'male', label: 'Male' },
              ]}
            />
          </div>
          <div className="flex-1 flex items-end">
            <SubmitButton label="Submit" />
          </div>
        </div>
      </div>
    </Form>
  );
}

export default BACCalculator;
