export default function ({ store, redirect, route }) {
  if (store.state.user === null) {
    const { path } = route
    if (path !== '/' && !path.includes('login')) {
      redirect('/app/login')
    }
  }
}
