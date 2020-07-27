export function getError(path: string | (string | number)[]): string {
  const { errors } = this.form.get(path);

  if (errors) {
    const [err, data] = Object.entries(errors)[0] as [string, any];
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
