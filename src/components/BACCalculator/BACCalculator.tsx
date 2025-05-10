import Button from '../Button/Button';
import Form from '../Form/Form';
import Input from '../Input/Input';

function BACCalculator() {
  return (
    <Form>
      <Input />
      <Input />
      <Input />
      <Input />
      <Input />
      <Button>Calculate</Button>
      <Button>Reset</Button>
    </Form>
  );
}

export default BACCalculator;
