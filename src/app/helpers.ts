export function getError(path: string | (string | number)[]): string {
  const field = this.form.get(path);

  if (!field) {
    throw new Error(`Form field with given path doesn't exist. Path: ${path}`);
  }

  if (field.errors) {
    const [err, data] = Object.entries(field.errors)[0] as [string, any];
    const messages = {
      email: 'Invalid email format',
      required: 'This field is required',
      minlength: `Minimum length is ${data.requiredLength}`,
      maxlength: `Maximum length is ${data.requiredLength}`,
    };

    return messages[err];
  }

  return '';
}
