import * as React from "react";
import { Button } from "../../shared/atoms/Button";

export interface IEventFormProps {
  onSubmit: (event: React.FormEvent) => void;
}

export const AddEventForm: React.FC<IEventFormProps> = ({ onSubmit }) => {
  return (
    <div>
      <form id="createEventForm" onSubmit={onSubmit}>
        <label>
          Name
          <input name="name" id="createEventForm-eventName" type="text" required />
        </label>

        <Button>CREATE</Button>
      </form>
    </div>
  );
};
