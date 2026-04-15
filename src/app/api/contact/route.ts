import { NextResponse } from 'next/server'
import { Resend } from 'resend'

export async function POST(request: Request) {
  const { name, email, subject, message } = await request.json()

  if (!name || !email || !subject || !message) {
    return NextResponse.json({ message: '全てのフィールドを入力してください。' }, { status: 400 })
  }

  const resend = new Resend(process.env.RESEND_API_KEY)

  try {
    // お問い合わせを受け取った側へのメール
    await resend.emails.send({
      from: 'onboarding@resend.dev', // Resendで認証済みのドメインに変更してください
      to: process.env.CONTACT_EMAIL as string, // 受信者メールアドレス (自分のメールアドレス)
      subject: `お問い合わせ: ${subject}`,
      html: `
        <p><strong>お名前:</strong> ${name}</p>
        <p><strong>メールアドレス:</strong> ${email}</p>
        <p><strong>件名:</strong> ${subject}</p>
        <p><strong>メッセージ:</strong><br/>${message}</p>
      `,
    })

    // お問い合わせを送信したユーザーへのサンキューメール
    await resend.emails.send({
      from: 'onboarding@resend.dev', // Resendで認証済みのドメインに変更してください
      to: email, // お問い合わせを送信したユーザーのメールアドレス
      subject: 'お問い合わせありがとうございます',
      html: `
        <p>${name}様</p>
        <p>この度はお問い合わせいただき、誠にありがとうございます。</p>
        <p>以下の内容でお問い合わせを受け付けいたしました。</p>
        <p>-----------------------------------</p>
        <p><strong>件名:</strong> ${subject}</p>
        <p><strong>メッセージ:</strong><br/>${message}</p>
        <p>-----------------------------------</p>
        <p>内容を確認後、改めてご連絡させていただきますので、今しばらくお待ちください。</p>
        <p>よろしくお願いいたします。</p>
      `,
    })

    return NextResponse.json({ message: 'お問い合わせが正常に送信されました。' }, { status: 200 })
  } catch (error) {
    console.error('メール送信エラー:', error)
    return NextResponse.json({ message: 'メールの送信に失敗しました。' }, { status: 500 })
  }
}
