<?php
declare(strict_types=1);

header('Content-Type: application/json; charset=utf-8');
header('X-Content-Type-Options: nosniff');

$siteSettings = [
    'brand' => 'Oakline',
    'recipientEmail' => 'requests@oakline.example',
    'fromEmail' => 'no-reply@oakline.example',
];

function respond(int $statusCode, bool $success, string $message): void
{
    http_response_code($statusCode);
    echo json_encode([
        'success' => $success,
        'message' => $message,
    ]);
    exit;
}

function field(string $name): string
{
    return isset($_POST[$name]) && is_scalar($_POST[$name]) ? trim((string) $_POST[$name]) : '';
}

function clean_text(string $value, int $maxLength): string
{
    $value = preg_replace('/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]/u', '', $value) ?? '';
    $value = trim($value);
    if (strlen($value) > $maxLength) {
        $value = substr($value, 0, $maxLength);
    }
    return $value;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    respond(405, false, 'Please submit the request form using the website form.');
}

$honeypot = field('website');
if ($honeypot !== '') {
    respond(200, true, 'Thank you. Your request has been received.');
}

$startedAt = field('formStartedAt');
if ($startedAt !== '' && ctype_digit($startedAt)) {
    $elapsedMs = (int) floor(microtime(true) * 1000) - (int) $startedAt;
    if ($elapsedMs >= 0 && $elapsedMs < 1800) {
        respond(429, false, 'Please wait a moment before submitting the request.');
    }
}

$fullName = clean_text(field('fullName'), 120);
$email = filter_var(field('email'), FILTER_SANITIZE_EMAIL);
$phone = clean_text(field('phone'), 40);
$service = clean_text(field('service'), 120);
$message = clean_text(field('message'), 3000);
$sourcePage = clean_text(field('sourcePage'), 160);
$privacyConsent = field('privacyConsent');

$allowedServices = [
    'Tree Removal',
    'Tree Trimming & Pruning',
    'Stump Grinding & Removal',
    'Emergency Storm Cleanup',
    'Lot & Land Clearing',
    'Tree Health Assessment',
];

$errors = [];
if ($fullName === '') {
    $errors[] = 'full name';
}
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    $errors[] = 'valid email';
}
if ($phone === '' || !preg_match('/^[0-9+\-\s().]{7,40}$/', $phone)) {
    $errors[] = 'valid phone';
}
if (!in_array($service, $allowedServices, true)) {
    $errors[] = 'service category';
}
if (strlen($message) < 10) {
    $errors[] = 'project details';
}
if ($sourcePage === '') {
    $errors[] = 'source page';
}
if ($privacyConsent !== 'yes') {
    $errors[] = 'privacy consent';
}

if ($errors !== []) {
    respond(422, false, 'Please provide: ' . implode(', ', $errors) . '.');
}

$subject = 'Oakline request: ' . $service;
$bodyLines = [
    'New Oakline provider-matching request',
    '',
    'Name: ' . $fullName,
    'Email: ' . $email,
    'Phone: ' . $phone,
    'Service: ' . $service,
    'Source page: ' . $sourcePage,
    '',
    'Project details:',
    $message,
    '',
    'Platform disclosure:',
    'Oakline is an independent matching platform. Oakline does not directly perform tree removal, trimming, stump grinding, storm cleanup, land clearing, inspections, or related services. Final pricing, scheduling, availability, licensing, insurance, warranties, and service terms come from participating providers.',
];
$body = implode("\n", $bodyLines);

$safeReplyTo = str_replace(["\r", "\n"], '', $email);
$headers = [
    'From: Oakline Requests <' . $siteSettings['fromEmail'] . '>',
    'Reply-To: ' . $safeReplyTo,
    'Content-Type: text/plain; charset=UTF-8',
    'X-Mailer: PHP/' . phpversion(),
];

$sent = @mail($siteSettings['recipientEmail'], $subject, $body, implode("\r\n", $headers));

if (!$sent) {
    respond(500, false, 'Your request could not be sent right now. Please call or email Oakline directly.');
}

respond(200, true, 'Thank you. Your request has been received.');
