export default function ({ store, redirect, route }) {
  if (store.state.user === null) {
    const { path } = route
    const allowed = ['/', '/pricing']
    if (!allowed.includes(path) && !path.includes('login')) {
      redirect('/app/login')
    }
  }
}
