import { useGlobalStore } from '../../stores/globalStore'; // Adjust path as needed

export default function Setting() {
  const theme = useGlobalStore((state) => state.theme);
  const setTheme = useGlobalStore((state) => state.setTheme);

  const handleThemeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTheme(event.target.checked ? 'dark' : 'light');
  };

  return (
    <div className="card bg-base-100 w-full shadow-sm p-4">
      <h1 className="text-xl font-semibold mb-4">설정</h1>

      <div className="form-control">
        <label className="label cursor-pointer">
          <span className="label-text">다크 모드</span>
          <input
            type="checkbox"
            value="dark" // This value is used by theme-controller if active
            className="theme-controller toggle toggle-primary"
            checked={theme === 'dark'}
            onChange={handleThemeChange}
          />
        </label>
      </div>
    </div>
  );
}
