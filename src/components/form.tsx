import React, { FC } from "react";
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";
import { Form, Select, Input, Button } from "antd";
import { Typography } from "antd";

const { Title } = Typography;
const { Option } = Select;

const FormComponent: FC = () => {
  const {
    ready,
    value,
    suggestions: { status, data },
    setValue,
    clearSuggestions,
  } = usePlacesAutocomplete({
    requestOptions: {
      /* Define search scope here */
    },
    debounce: 200,
  });
  const handleInput = (value: any) => {
    // Update the keyword of the input element
    setValue(value);
  };
  const handleSelect = (description: any) => {
    // When user selects a place, we can replace the keyword without request data from API
    // by setting the second parameter as "false"
    setValue(description, false);
    clearSuggestions();

    // Get latitude and longitude via utility functions
    getGeocode({ address: description })
      .then((results) => getLatLng(results[0]))
      .then(({ lat, lng }) => {
        console.log(" Coordinates: ", { lat, lng });
      })
      .catch((error) => {
        console.log(" Error: ", error);
      });
  };
  const renderSuggestions = () =>
    data.map((suggestion) => {
      const {
        id,
        structured_formatting: { main_text, secondary_text },
      } = suggestion;

      return (
        <li key={id} onClick={() => handleSelect(suggestion)}>
          <strong>{main_text}</strong> <small>{secondary_text}</small>
        </li>
      );
    });

  return (
    <div>
      <Form name="control-hooks" initialValues={{ remember: true }}>
        <Title level={4}>SEARCH FOR HOSPITALS</Title>
        <Form.Item name="Distance" label="Gender" rules={[{ required: true }]}>
          <Select
            placeholder="Select a option and change input text above"
            allowClear
          >
            <Option value="3000">3km</Option>
            <Option value="10000">10km</Option>
            <Option value="20000">20km</Option>
          </Select>
        </Form.Item>
        <Form.Item
          label="Search"
          name="Search"
          rules={[{ required: true, message: "This field is required" }]}
        >
          <Input
            onChange={handleInput}
            value={value}
            disabled={!ready}
            allowClear
          />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
      {status === "OK" && <ul>{renderSuggestions()}</ul>}
    </div>
  );
};
export default FormComponent;
