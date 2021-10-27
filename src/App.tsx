import React from 'react';
import { withLayout } from './layout/Layout';
import { Route, Switch, Redirect, useHistory } from 'react-router-dom';

import { FormPage } from './pages/form-page';
import { ViewPage } from './pages/view-page';


export type FormData = {
  fullname: string;
  age: string;
  childs: Array<{ fullname: string, age: string }>
}

function App() {
  const history = useHistory();
  const [data, setData] = React.useState<FormData>({ fullname: '', age: '', childs: [] });

  const handleData = (formData: FormData) => {
    setData(formData);
    history.push('/view');
  }

  return (
    <React.Fragment>
      <Switch>
        <Route exact path = '/' render = {() => <FormPage handleData = {handleData} />} />
        <Route exact path = '/view' render = {() => <ViewPage data = {data}/>} />
        <Route path = '*' render = {() => <Redirect to = '/'/>}/>
      </Switch>
    </React.Fragment>
  );
}

export default withLayout(App);
